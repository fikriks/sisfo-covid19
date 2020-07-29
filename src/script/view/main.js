function main() {
    const getInfo = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                renderData(responseJson);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const getInfoProvinsi = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                renderDataProvinsi(responseJson);
            })
            .catch(error => {
                console.log(error);
            })
    };


    const renderData = (datas) => {

        $('#list').html(`
                <div class="container mt-5">
                <span class="font-weight-bold"><img src="./src/assets/img/indonesia.png" class="img-fluid" style="width:20px;">Indonesia</span>
                <div class="row">
                <div class="col-12 col-sm-4">
                <div class="card">
                    <div class="card-body col-sm-12">
                        <img src="./src/assets/img/sedih.png" class="float-right">
                        <h5>${datas.perawatan}</h5>
                        <p>Potitif</p>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                <div class="card">
                    <div class="card-body col-sm-12">
                    <img src="./src/assets/img/senyum.png" class="float-right">
                        <h5>${datas.sembuh}</h5>
                        <p>Sembuh</p>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                <div class="card">
                    <div class="card-body col-sm-12">
                    <img src="./src/assets/img/nangis.png" class="float-right">
                        <h5>${datas.meninggal}</h5>
                        <p>Meninggal</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>`);

    };

    const renderDataProvinsi = (datas) => {
        var ctx = document.getElementById('myChart').getContext('2d');
        let a = '';

        datas.data.forEach(data => {
            a += `<tr>
                <td>${data.provinsi}</td>
                <td>${data.kasusPosi}</td>
                <td>${data.kasusSemb}</td>
                <td>${data.kasusMeni}</td>
                </tr>`;
        })

        $('#provinsi').html(a);
        $('#table').DataTable();


        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [datas.data[0].provinsi, datas.data[1].provinsi, datas.data[2].provinsi, datas.data[3].provinsi, datas.data[4].provinsi],
                datasets: [{
                    label: 'Statistik 5 Terbesar Suspect COVID-19',
                    data: [datas.data[0].kasusPosi, datas.data[1].kasusPosi, datas.data[2].kasusPosi, datas.data[3].kasusPosi, datas.data[4].kasusPosi],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };

    $().ready(function () {
        getInfo();
        getInfoProvinsi();
    })
}

export default main;