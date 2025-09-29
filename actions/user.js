"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { success } from "zod";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) throw new Error("User not found");
  try {
    const result = await db.$transaction(
      async (tx) => {
        //find the industry is exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        // if industry not exists create a new industry with ai later on ..
        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], // default empty array
              growthRate: 0, // default value
              demandLevel: "MEDIUM", // default value
              topSkills: [], // default empty array
              marketOutlook: "NEUTRAL", // default value
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // one week from now
            },
          });
        }
        // upadate the user with the industry id
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });


        return{ updatedUser, industryInsight}
      },
      {
        timeout: 10000,
      }
    );

    return {success: true, ...result};
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update user  profile");
  }
}

export async function getUserOnboardingStatus() {
    const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");
    
  try {
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
        select: {
            industry: true,
        },
    });  
    return {
        isOnboarded: !!user?.industry,
    };   
    } catch (error) {
        console.error("Error fetching user onboarding status:", error.message);
        throw new Error("Failed to fetch user onboarding status");
        
    }
    
}
