const product = async function(){
    const url = 'https://run.mocky.io/v3/aae3903b-64bf-4285-920d-0be7f5345e76'

    try{
        const result = await fecth (url)
        const data = result.json()
        console.log(data)
    }catch(e){
        console.error('Error:', e)
    }

}
product()