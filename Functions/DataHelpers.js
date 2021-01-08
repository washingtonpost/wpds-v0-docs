async function fetchData(dataPath){
    try {
        const res=await fetch(`/api/getdata?website_url=${dataPath}`)
        const json=await res.json();
        return json;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export default{fetchData}