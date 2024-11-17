const feed = [
  "https://picsum.photos/id/237/700/200",
  "https://picsum.photos/id/238/700/200",
  "https://picsum.photos/id/200/700/200",
];

export default function Root() {
  return (
    <main style={{ padding: "10px 10vw" }}>
      {feed?.map((val, key) => (
        <div key={key}>
          <img src={val} width="100%" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
            tempor tortor. Donec id euismod risus, id fringilla mi. Phasellus
            turpis nulla, accumsan quis rutrum id, ullamcorper sed nisl.
            Phasellus in dui eu risus consectetur malesuada. Morbi id pulvinar
            urna, ac hendrerit turpis. Donec auctor risus ut dui mattis,
            ultricies commodo enim facilisis. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Maecenas dictum odio tincidunt lectus
            imperdiet tristique.
          </p>
        </div>
      ))}
    </main>
  );
}
