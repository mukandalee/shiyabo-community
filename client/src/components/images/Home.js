import Dashboard from "../Dashboard";
function Home({ user }) {
  if (user) {
    return <>
    <Dashboard/>
    </>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
