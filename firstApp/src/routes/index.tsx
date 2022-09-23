import { component$ } from "@builder.io/qwik";

export const App = component$(() => {
  return (
    <div>
      <Greeter />
    </div>
  );
});

export const Greeter = component$(() => {
  return <div>Hello World!</div>;
});







// export default component$(function () {
//   const data = {
//     name: "Ajay Yadav",
//     description: description,
//   }
//   return (
//     <div>
//       <input type="text" value={data.name} />
//       <br />
//       <textarea cols="30" rows="10">{data.description}</textarea>
//     </div >
//   )

// })


// export const description = `Qwik is designed for the fastest possible page load time,
// by delivering pure HTML with near 0 JavaScript for your 
// pages to become interactive, regardless of how complex 
// your site or app is.It achieves this via resumability 
// of code`;


/*Bind data.name to the value attribute of <input/>.
Bind data.description to the content of <textarea/>. */


