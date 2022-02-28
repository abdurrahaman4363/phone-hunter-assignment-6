    const loadPhone = () =>{
        const searchText = document.getElementById('search-input');
        searchResult = searchText.value;
        searchText.value = '';

      const uri = `https://openapi.programming-hero.com/api/phones?search=${searchResult}`;
      fetch(uri)
      .then(res => res.json())
      .then(data => displayPhone(data.data))
    }

    const displayPhone = PhoneDetail =>{

        console.log(PhoneDetail);


        const constainerDiv = document.getElementById('container');
        PhoneDetail.forEach(phone => {

         console.log(phone.image);
         console.log(phone.phone_name);
         console.log(phone.brand);

         const div = document.createElement('div');
         div.classList.add('phone-div');
         div.innerHTML = `
           
           <div class="row row-cols-1 col-12 col-lg-4 w-100 mx-auto">
            <div class="col  m-5">
              <div class="card ">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button class="">phone datails</button>
                </div>
              </div>
            </div>
          </div>

         `;

         constainerDiv.appendChild(div);


        })
    }