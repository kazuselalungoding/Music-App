import FlowingMenu from "../component/FlowingMenu";

function Category() {
  const demoItems = [
    {
      link: "/",
      text: "POP",
      image: "http://localhost:5000/images/lana2.png",
    },
    {
      link: "#",
      text: "Rock",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "R&b",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Hiphop",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "600px",
            position: "relative",
            width: "100%",
            paddingTop: "20px",
          }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </>
  );
}

export default Category;
