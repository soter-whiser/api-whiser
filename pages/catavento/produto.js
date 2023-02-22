async function produto(request, response) {
    const apiToken = process.env.API_TOKEN

    const cataventoResponse = await fetch('http://catavento2.api.winbooksweb.com.br/BDIApi/Produto/Buscar?codigo=9788555342080', {
                                            headers: {'API_TOKEN': apiToken}
    })

    response.setHeader('Cache-Control', 'smaxage=10, stale-while-revalidate')
                                            
    response.json({
        cataventoResponse
    })
}

export default produto