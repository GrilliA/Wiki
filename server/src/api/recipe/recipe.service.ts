import prisma from "../../helper/prisma";

export const getRecipeById = async (id: number) => {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      comments: true,
      products: true,
      treatmentPhase: true,
      typeOfTreatment: true,
    },
  });
  return recipe;
};
export const getallRecipes = async () => {
  const recipe = await prisma.recipe.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      comments: true,
      products: true,
      treatmentPhase: true,
      typeOfTreatment: true,
    },
  });
  return recipe;
};
export const createRecipe = async (data: any) => {
  const recipe = await prisma.recipe.create({
    data,
  });
  return recipe;
};

export const updateRecipe = async (id: number, data: any) => {
  const recipe = await prisma.recipe.update({
    where: { id },
    data,
  });
  return recipe;
};

export const deleteRecipe = async (id: number) => {
  const recipe = await prisma.recipe.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return recipe;
};
