const products = [
    {
        "id": 1,
        "name":" Produkt 1",
        "price": 62,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 2,
        "name":" Produkt 2",
        "price": 25,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    },
    {
        "id": 3,
        "name":" Produkt 3",
        "price": 72,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 4,
        "name":" Produkt 4",
        "price": 41,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    },
    {
        "id": 5,
        "name":" Produkt 5",
        "price": 24,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 6,
        "name":" Produkt 6",
        "price": 26,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    },
    {
        "id": 7,
        "name":" Produkt 7",
        "price": 38,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 8,
        "name":" Produkt 8",
        "price": 73,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    },
    {
        "id": 9,
        "name":" Produkt 9",
        "price": 64,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 10,
        "name":" Produkt 10",
        "price": 83,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    },
    {
        "id": 11,
        "name":" Produkt 11",
        "price": 48,
        "image": "images/produkt1.png",
        "description": "Eleganckie filiżanki porcelanowe z kolekcji miesięcznej, każda ozdobiona wyjątkowymi motywami kwiatowymi charakterystycznymi dla danego miesiąca. Filiżanki wykonane są z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie filiżanek oraz uchwyty są delikatnie złocone, co dodaje im luksusowego charakteru. Na filiżankach znajdują się subtelne napisy z nazwami miesięcy, wykonane złotą czcionką, które harmonizują z kolorowymi, ręcznie malowanymi wzorami kwiatowymi."
    },
    {
        "id": 12,
        "name":" Produkt 12",
        "price": 51,
        "image": "images/produkt2.png",
        "description": "Eleganckie porcelanowe miseczki w stylu chińskim, wyróżniające się subtelnym niebieskim wzorem roślinnym. Miseczki mają klasyczny, biały kolor z delikatnymi, ręcznie malowanymi motywami liści i winorośli w odcieniach niebieskiego. Każda miseczka jest starannie wykonana z wysokiej jakości porcelany, co zapewnia ich trwałość i elegancki wygląd. Krawędzie miseczek są lekko zaokrąglone, co dodaje im klasy i sprawia, że są wygodne w użytkowaniu. Doskonale sprawdzą się zarówno do serwowania potraw, jak i jako element dekoracyjny. Idealne na prezent dla miłośników orientalnego designu oraz do codziennego użytku w domu."
    }
];
export default products;