import React from 'react'
import { useRouter } from 'next/router'

export default function DetailPage() {
    const router = useRouter();

    return (
        <h1>
            {router.query.newsId}
        </h1>
    )
}
