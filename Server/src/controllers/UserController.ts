import { PrismaClient, users } from '@prisma/client'

export async function getAllUsers(): Promise<null | users[]> {
    const prisma = new PrismaClient();

    try {
        return await prisma.users.findMany();
    } catch (e) {
        // Return Error Response
    } finally {
        await prisma.$disconnect();
    }

    return null;
}

export async function getUser(id: string): Promise<null | users> {
    const prisma = new PrismaClient();

    try {
        return await prisma.users.findFirst({
            where: {
                id: parseInt(id)
            }
        });
    } catch (e) {
        // Return Error Response
    } finally {
        await prisma.$disconnect();
    }

    return null;
}