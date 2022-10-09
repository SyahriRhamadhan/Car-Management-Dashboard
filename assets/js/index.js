$("#add_car").submit(function(event){
    alert("Data Berhasil Di Simpan")
})

$("#update_car").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray()
    var data ={}
    $.map(unindexed_array, function(n,i){
        data[n['name']] =n['value']
    })
    console.log(data)

    var request={
        "url":`http://localhost:3000/api/cars/${data.id}`,
        "method":"PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Berhasil Di Update")
    })
})

if(window.location.pathname=="/"){
    $ondelete=$("#delete_car")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request={
            "url":`http://localhost:3000/api/cars/${id}`,
            "method":"DELETE"
        }
        if(confirm("Menghapus Data Mobil")){
            $.ajax(request).done(function(response){
                alert("Data Berhasil Di Hapus")
                location.reload()
            })
        }
    })
}