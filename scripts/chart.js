// Promise.all([
//      fetch("http://localhost:3000/items/get"),
//      fetch("http://localhost:3000/contactlist/get"),
//      fetch("http://localhost:3000/itemgroup/get")
//    ]).then(([items, contactlist, itemgroup]) => {
//        ReactDOM.render(
//            <Test items={items} contactlist={contactlist} itemgroup={itemgroup} />,
//            document.getElementById('overview');
//        );
//    }).try((err) => {
//        console.log(err);
//    });


var val = document.getElementById("info")

          fetch('https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD')
          .then(response => response.json())
          .then(data => { 
               console.log(data)
               val.innerHTML = data.USD
          })

          // const getBtcData = async () => {
          //      fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
          //     .then(response => response.json())
          //     .then(data => {
          //       console.log(data);
          //       document.getElementById("info").innerHTML = '<b>1 BTC = ' + data.USD + ' USD</b>'
          //     });
          //   }
          //   getBtcData();
          //   tcount=setInterval(function(){
          //     tcount++
          //     if (tcount==10) {getBtcData(); tcount=0}
          //     document.getElementById("infotime").innerHTML = 'Next update in ' + (10-tcount) + ' seconds'
          //   },1000);