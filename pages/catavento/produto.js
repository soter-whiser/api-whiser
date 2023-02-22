async function produto(request, response) {
    const apiToken = process.env.API_TOKEN



    response.setHeader('Cache-Control', 'smaxage=60, stale-while-revalidate')
                                            
    response.json({
        cataventoResponse
    })
}

export default produto