import React from 'react';



const KeyFacts = () => {


  
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    style={{
      backgroundImage: "linear-gradient(to top, white, transparent), url('https://res.cloudinary.com/dbloat0jr/image/upload/v1736377885/Bg_ue70uq.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="p-4 max-w-4xl mx-auto">
        {/* Styled Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Key Facts
          </h1>
          <div className="flex justify-center">
            <div className="w-16 md:w-24 h-1 bg-blue-600 rounded"></div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Primary Schools in Badagry Local Government</h3>
            <ul className="list-disc pl-5 space-y-1">
              {[
                "L. A Pry school Akarakumo",
                "L. A Pry school Yafin",
                "L. A Pry school Badagry",
                "L. A Pry school Keta-West",
                "L. A Pry school Topo/Idale",
                "Methodist Pry school Erekiti",
                "Methodist Pry school Tohon",
                "O. L. A Pry school Badagry",
                "Saint Leo Pry school Ikoga- Zebbe",
                "Muslim pry school Badagry",
                "ST. Patrick Pry school Iragbo/Iragon",
                "L. A Pry school Ajido",
                "L. A Pry school 1 Ajara",
                "L. A Pry school 2 Ajara",
                "Sea-Beach Pry School Ajido",
                "Unity Primary School Ajido",
                "St. Thomas Pry School Badagry",
                "Anser-Udeen Primary School Badagry",
                "Gbenopo Primary School 1 Ajara",
                "Gbenopo Primary School 2 Ajara",
                "Anglican Primary School 1 Igborosun",
                "Anglican Primary School 2 Igborosun",
                "Methodist Primary School Badagry",
                "Anglican Pry Sch - Aradagun/Mosafejo",
                "Anglican Pry Sch - Gbanko",
                "Aglican Pry Sch - Ilado",
                "Anglican Pry Sch - Imeke",
                "Anglican Pry Sch - Ilogbo- Eremi",
                "Anglican Pry Sch - Toga Zanmu",
                "Anglican Pry Sch - Iworo-Ajido",
                "ADS Pry Sch. 1 - Araromi-Ale",
                "ADS Pry Sch. 2 - Araromi-Ale",
                "ADS Pry Sch. 3 - Araromi-Ale",
                "Army Children Sch - Ibereko",
                "Community Pry Sch - Esepe",
                "Epeme Pry Sch - Epe",
                "L.A Pry Sch - Ibereko",
                "L.A Pry Sch - Ipara",
                "L.A Pry Sch - Mowo-Agemowo",
                "L.A Pry Sch - Okogbo"
              ].map((school, index) => (
                <li key={index} className="transition-transform transform hover:scale-105">
                  {school}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Primary Health Centres in Badagry Local Government and Locations</h3>
            <ul className="list-disc pl-5 space-y-1">
              {[
                "Ajara Topa PHC- Ajara Topa Badagry",
                "Ajara flagship PHC- Ajara Iluda Badagry",
                "Ajido PHC- Ebute Olofin Ajido",
                "Wilbrose Ajido Health Centre- Povita, Ajido road",
                "Gberefu PHC- Gberefu Sea-Beach Badagry",
                "Badagry PHC- Awhanjigo Badagry",
                "Iragbo/Iragon Health post- Irogbo/Iragon, Badagry",
                "Pota PHC- Pota Ikoga Road Badagry",
                "Topo-Dale Health Post- Dale, Topo road",
                "Koga PHC- Koga community Badagry",
                "Tohon PHC- Tohon community Badagry",
                "Torikoh PHC- Aminu close off rotary way, Torikoh Badagry",
                "Mogotho Ajido PHC- Mogotho Community Ajido, Badagry",
                "Mowo PHC - Ikoga Road Mowo Badagry",
                "Araromi PHC - Ile-epo Bus Stop, Badagry Express Way",
                "Morogbo PHC - Morogbo, Car Wash Bus Stop, Agbara",
                "Ilogbo PHC - Opposite Ilogbo Eremi Market, Ilogbo Badagry",
                "Isamole PHC - Isamole Village, Ilogbo Badagry",
                "Ilado PHC - Maruwa Bus Stop, Ilado Badagry",
                "Medical Portacabin PHC - Iworo Extension, Iworo Badagry",
                "Obele Esepe PHC - Iworo Extension, Iworo Badagry",
                "Sakpo PHC - Sakpo Sea Beach, Seme Expressway, Badagry.",
                "Apa PHC - Apa, Opposite Apa Palace Way, Badagry.",
                "Seme PHC - Custom Quatres, Seme, Badagry."
              ].map((center, index) => (
                <li key={index} className="transition-transform transform hover:scale-105">
                  {center}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;