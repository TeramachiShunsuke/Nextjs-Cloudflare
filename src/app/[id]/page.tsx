'use client'
// import { MainSection } from '@/components/templates/sections'
// import { Project } from '@/types/project'
// import { Suspense } from 'react'
// import { ProjectUserList } from '@/components/organisms/lists/ProjectUserList'
// import { ProductPanel } from '@/components/organisms/panels/ProductPanel'
// import { ApikeysList } from '@/components/organisms/lists/ApikeysList'

export default function Page({ params }: { params: { id: string } }) {
    const id = '91b28cd9d00a4d76be7af565f1153241'
    const project_id = params.id
    console.log(params)
    return (
        <>
            {id}
            {params.id}
            <br />
            {project_id}
            {/* <MainSection>
                <ProductPanel project_id={id} />

                <div className="flex w-full h-[calc(50%_-_40px)]">
                    <div className="flex w-1/3 h-full p-2">
                        <ApikeysList />
                    </div>
                    <div className="flex w-1/3 h-full p-2">
                        <ApikeysList />
                    </div>
                    <div className="flex w-1/3 h-full p-2">
                        <ApikeysList />
                    </div>
                </div>
                <div className="flex w-full h-[calc(50%_-_40px)] bg-blue-300">
                    <div className="w-[50%] h-full">
                        <ProjectUserList project_id={id} />
                    </div>
                    <div className="w-[50%]">
                        <ProjectUserList project_id={id} />
                    </div>
                </div>
            </MainSection> */}
        </>
    )
}

export const runtime = 'edge'
