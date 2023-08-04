import { z } from "zod"

const getDepBoardWithDetails = z.object({
    depBoard: z.object({
        generatedAt: z.date(),
        locationName: z.string(),
        crs: z.string(),
        platformAvailable: z.boolean(),
        trainServices: z.object({
            service: z.array(z.object({
                std: z.string(),
                etd: z.string(),
                platform: z.string(),
                operator: z.string(),
                operatorCode: z.string(),
                serviceType: z.string(),
                serviceID: z.string(),
                origin: z.object({
                    location: z.array(z.object(
                        {
                            locationName: z.string(),
                            crs: z.string()
                        })
                    )
                }),
                destination: z.object({
                    location: z.array(z.object(
                        {
                            locationName: z.string(),
                            crs: z.string()
                        })
                    )

                }),
                subsequentCallingPoints: z.object({
                    callingPointList: z.object({
                        callingPoint: z.array(z.object(
                            {
                                locationName: z.string(),
                                crs: z.string(),
                                st: z.string(),
                                et: z.string()
                            })
                        )
                    })
                })


            })),
        })
    })
}
);

export default getDepBoardWithDetails;