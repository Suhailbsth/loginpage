import img from './tea.jpg';
import './App.css';

function App() {
  return (
    <main className="flex items-center justify-center w-full md:h-screen flex-1 px-10 py-10 text-center bg-cyan-700">
    <div className="bg-white rounded-2xl shadow-2xl sm:flex sm:flex-row flex flex-col-reverse md:w-3/4 w-auto max-w-4xl h-auto">
       <div className="md:w-1/2 py-12 px-20 ml-2 mr-2 font-thin" >
         <h1 className="text-4xl md:pt-16">Welcome Back</h1>
         <input type="text"placeholder='Email' className="mb-6 mt-12 border-2 w-52"></input><br/>
         <input type="password"placeholder='Password'className="mb-4 border-2 w-52"></input><br/>
         <div className="flex w-52 mb-5 ml-auto md:ml-9">         
         <label className="flex items-center text-s float-left" for="name"><input type="checkbox" className="mr-2 float-left"name="check"></input>Remember Me</label><br/>
        </div>
         <button className="bg-sky-700 text-white font-bold w-52 p-auto h-8 rounded lg:mb-4">login</button><br/>
         <a href="#" className="text-xs font-medium md:mt-0">Forgot your pasword?</a>
         </div>
        <div className="md:w-1/2 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-2xl md:rounded-br-2xl" ><img src={img}className="h-full rounded-tl-2xl rounded-tr-2xl md:rounded-tr-2xl md:rounded-br-2xl"></img></div>
    </div>
    </main>
  );
}

export default App;
