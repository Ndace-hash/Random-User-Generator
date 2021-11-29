new Vue({
 el: '#app',
 data: {
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane@gmail.com',
  gender: 'female',
  picture: 'https://randomuser.me/api/portraits/women/40.jpg',
 },
 methods: {
  getRandomUser: async function () {
  
  const response = await fetch('https://randomuser.me/api');
  const { results } = await response.json();
   this.firstName = results[0].name.first;
   this.lastName = results[0].name.last;
   this.email = results[0].email;
   this.gender = results[0].gender;
   this.picture = results[0].picture.large;
  }
 }
})