    // load data from API

    const loadPhone = () =>{
        const searchText = document.getElementById('search-input');
        searchResult = searchText.value;
        searchText.value = '';

      const uri = `https://openapi.programming-hero.com/api/phones?search=${searchResult}`;
      fetch(uri)
      .then(res => res.json())
      .then(data => displayPhone(data.data))
    }
    
    // displaying data which is getting from API

    const displayPhone = PhoneShow =>{
      // console.log(PhoneShow.length);

      if(PhoneShow.length <= 0){
          const errorShow = document.getElementById('error-show');
          errorShow.style.display = 'block';
      }
      else{
        const errorShow = document.getElementById('error-show');
        errorShow.style.display = 'none';
        const PhoneDetail = PhoneShow.slice(0,20);
        const containerDiv = document.getElementById('container');
        containerDiv.textContent ="";
        PhoneDetail.forEach(phone => {
         /*
         console.log(phone.phone_name);
         console.log(phone.brand); */
         const div = document.createElement('div');
         div.classList.add('phone-div');
         div.innerHTML = `
           <div class="row w-100 mx-auto">
            <div class="col m-5">
              <div class="card ">
                <img src="${phone.image}" class="card-img-top" alt="..."> 
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button onclick="buttonDetails('${phone.slug}')" class="">phone datails</button>
                </div>
              </div>
            </div>
          </div>
         `;//slice(0,20)
containerDiv.appendChild(div);
        

        })
       
      }
        

        
    }

    // button information

const buttonDetails = (phoneInformation) =>{

          //  console.log(phoneInformation);

    const uri = `https://openapi.programming-hero.com/api/phone/${phoneInformation}`;
    fetch(uri)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data))
} 

// display details

const displayPhoneDetail = information =>{
  // console.log(information);
  // console.log(information.mainFeatures);
  // console.log(information.others);
  // console.log(information.mainFeatures.sensors);
  // 
  // console.log(information.image);
  // console.log(information.releaseDate);
  // console.log(information.mainFeatures);
  const phoneInformation = document.getElementById('phone-information');
  phoneInformation.textContent = "";
  const div= document.createElement('div');
  
  div.classList.add('card');

   const errorMessage = "Not Found"

  div.innerHTML =`
  <img src="${information.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <p>Name: ${information.name}</P>
  <h4>Release Date: ${information?.releaseDate === undefined? errorMessage:information.releaseDate}</h4>
     <h3>Basic Information:</h3>
     
    <p>storage: ${information.mainFeatures?.storage}</P>
    <p>displaySize: ${information.mainFeatures?.displaySize}</P>
    <p>chipSet: ${information.mainFeatures?.chipSet}</P> 
    <p>memory: ${information.mainFeatures?.memory}</P> 
     
    
    
    
    <h3>Sensor:</h3>
    <p>${information.mainFeatures?.sensors === undefined? errorMessage:information.mainFeatures.sensors}</p>
     <h3>Others Information</h3>
     <p>WLAN: ${information.others?.WLAN === undefined? errorMessage:information.others.WLAN}</p>
    <p>Bluetooth: ${information.others?.Bluetooth === undefined? errorMessage:information.others.Bluetooth}</p>
    <p>GPS: ${information.others?.GPS === undefined? errorMessage:information.others.GPS}</p>
    <p>NFC: ${information.others?.NFC === undefined? errorMessage:information.others.NFC}</p>
    <p>Radio: ${information.others?.Radio === undefined? errorMessage:information.others.Radio}</p>
   
  </div>
  `;
  phoneInformation.appendChild(div); 
}

 