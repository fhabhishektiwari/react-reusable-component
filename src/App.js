import './App.css';
import UserProfile from './UserProfile';
import pic1 from './assets/usr1.jpg'
import pic2 from './assets/usr2.jpg'
import pic3 from './assets/usr3.jpg'

const users=[
  {
    img:pic1,
    id:1,
    name:'Nishant',
    address:'UP',
    color:'#fff',
    backgroundColor:'red',
    fontSize:10

  },
  {
    img:pic2,
    id:2,
    name:'Ketan',
    address:'MP',
    color:'#fff',
    backgroundColor:'green',
    fontSize:12

  },
  {
    img:pic3,
    id:3,
    name:'Yashwant',
    address:'MP',
    color:'#fff',
    backgroundColor:'blue',
    fontSize:14
  }

]
// console.log(users)

function App() {
  return (
    <div className="App">
      <h4>Our Users</h4>
      {users.map(items=>(
        <UserProfile key={items.id} data={items}/>
      ))}
    </div>
  );
}

export default App;
