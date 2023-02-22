async function produto(request, response) {
    const apiToken = process.env.API_TOKEN

    const cataventoResponse = await fetch("http://catavento2.api.winbooksweb.com.br/BDIApi/Produto/Buscar?codigo=9788555342080" {
                                            headers: {'API_TOKEN': API_TOKEN}
    })
                                            
    response.json({
        cataventoResponse
    })
}

export default produto