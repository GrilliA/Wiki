export type WikiData<T, K = {}> = Omit<T, "createdAt" | "updatedAt" | "deletedAt" | "isDeleted" | `${string}Id`> & K;
