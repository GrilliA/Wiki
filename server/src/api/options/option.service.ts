import prisma from "../../helper/prisma";
import { getOptionResponseData } from "./option.util";

export const getOptionById = async (id: number) => {
  const option = await prisma.option.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
  return getOptionResponseData(option);
};

export const getOptionsByGroup = async (group: string) => {
  const options = await prisma.option.findMany({
    where: {
      group: {
        name: group,
      },
      deletedAt: null,
    },
  });
  return options.map(getOptionResponseData);
};

export const getAllOptions = async (groupId: number) => {
  const options = await prisma.option.findMany({
    where: {
      deletedAt: null,
      group: {
        id: groupId,
      },
    },
    orderBy: {
      index: "asc",
    },
  });
  const sortedOptions = options.map(getOptionResponseData);
  return sortedOptions;
};

export const getOptionsByMultipleGroups = async (groups: Array<string>) => {
  const options = await prisma.$transaction(
    groups.map((group) => {
      return prisma.option.findMany({
        where: { group: { name: group }, deletedAt: null },
        orderBy: {
          index: "asc",
        },
      });
    }),
  );
  return options.map((item) => item.map(getOptionResponseData));
};

export const createOption = async (data: any) => {
  const { group } = data;

  const allGroupOptions = await prisma.option.findMany({
    where: {
      group: { id: group.connect?.id },
      deletedAt: null,
    },
    orderBy: {
      index: "asc",
    },
  });

  const lastOption = allGroupOptions[allGroupOptions.length - 1];
  const body = {
    ...data,
    index: lastOption?.index != null ? lastOption?.index + 1 : 1,
  };
  console.log(JSON.stringify(body, null, 2));
  await prisma.option.create({
    data: body,
  });

  const allOptions = await getAllOptions(1);

  return allOptions;
};

export const updateOption = async (id: number, newData: any) => {
  const oldData = await prisma.option.findUnique({
    where: { id },
  });

  const { index: oldIndex } = oldData;
  const { index: newIndex } = newData;

  if (oldIndex === newIndex) {
    const option = await prisma.option.update({
      where: { id },
      data: newData,
    });
    const allOptions = await getAllOptions(1);

    return allOptions;
  }

  const allOptionsByGroup = await prisma.option.findMany({
    where: { group: newData?.group, deletedAt: null },
    orderBy: {
      index: "asc",
    },
  });

  const rearrangedOptions = allOptionsByGroup.map((option) => {
    const { index: currentIndex } = option;

    if (currentIndex === oldIndex) {
      return {
        ...option,
        ...newData,
      };
    }

    if (newIndex > oldIndex && currentIndex <= newIndex && currentIndex > oldIndex) {
      return {
        ...option,
        index: currentIndex - 1,
      };
    }

    if (newIndex < oldIndex && currentIndex >= newIndex && currentIndex < oldIndex) {
      return {
        ...option,
        index: currentIndex + 1,
      };
    }

    return option;
  });

  const actions = rearrangedOptions.map(async (item) => {
    return await prisma.option.update({
      where: { id: item.id },
      data: item,
    });
  });

  await Promise.all(actions);

  const allOptions = await getAllOptions(1);

  return allOptions;
};

export const deleteOption = async (id: number) => {
  const deletedOption = await prisma.option.update({
    where: { id },
    data: {
      deletedAt: new Date().toISOString(),
    },
  });

  const allOptionsByGroup = await prisma.option.findMany({
    where: {
      group: {
        id: deletedOption?.groupId,
      },
      deletedAt: null,
    },
    orderBy: {
      index: "asc",
    },
  });

  const rearrangedOptions = allOptionsByGroup.map((option) => {
    const { index: currentIndex } = option;

    if (deletedOption.index <= option.index) {
      return {
        ...option,
        index: currentIndex - 1,
      };
    }

    return option;
  });

  const actions = rearrangedOptions.map(async (item) => {
    return await prisma.option.update({
      where: { id: item.id },
      data: item,
    });
  });

  await Promise.all(actions);

  const allOptions = await getAllOptions(1);

  return allOptions;
};
