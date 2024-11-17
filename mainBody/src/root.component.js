const feed = [
  "https://zenzalepik.github.io/Zalepik_Images/icons/img_icon_gratis_logo_zalepik.svg",
  "https://zenzalepik.github.io/Zalepik_Images/icons/img_icon_gratis_logo_zalepik.svg",
  "https://zenzalepik.github.io/Zalepik_Images/icons/img_icon_gratis_logo_zalepik.svg",
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
