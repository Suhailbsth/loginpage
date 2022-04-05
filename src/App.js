import img from './tea.jpg';
import './App.css';

function App() {
  return (
    <main className="flex items-center justify-center w-full mt-20 h-screen flex-1 px-2.5 text-center bg-cyan-700">
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl h-5/6">
       <div className="w-1/2 py-12 px-20 font-thin" >
         <h1 className="text-4xl pt-16">Welcome Back</h1>
         <input type="text"placeholder='Email' className="mb-6 mt-12 border-2 w-52"></input><br/>
         <input type="password"placeholder='Password'className="mb-4 border-2 w-52"></input><br/>
         <div className="flex w-52 mb-5 ml-6">         
         <label className="flex items-center text-s float-left" for="name"><input type="checkbox" className="mr-2 float-left"name="check"></input>Remember Me</label><br/>
        </div>
         <button className="bg-sky-700 text-white font-bold w-52 p-auto h-8 rounded mb-4">login</button><br/>
         <a href="#" className="text-xs font-medium">Forgot your pasword?</a>
         </div>
        <div className="w-1/2 rounded-tr-2xl rounded-br-2xl" ><img src={img}className="h-full rounded-tr-2xl rounded-br-2xl"></img></div>
    </div>
    </main>
  );
}

export default App;
