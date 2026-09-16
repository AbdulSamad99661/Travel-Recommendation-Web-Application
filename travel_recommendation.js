const travelData = {
  countries: [
    {
      name: "Australia",
      cities: [
        {
          name: "Sydney, Australia",
          imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80",
          description: "Famous for its iconic Sydney Opera House, stunning harbor, and vibrant beach culture."
        },
        {
          name: "Melbourne, Australia",
          imageUrl: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&auto=format&fit=crop&q=80",
          description: "Known for its vibrant cafe culture, street art, and Victorian architecture."
        }
      ]
    },
    {
      name: "Japan",
      cities: [
        {
          name: "Tokyo, Japan",
          imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80",
          description: "A bustling metropolis blending ultra-modern neon-lit skyscrapers with historic temples."
        },
        {
          name: "Kyoto, Japan",
          imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80",
          description: "Famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses."
        }
      ]
    }
  ],
  temples: [
    {
      name: "Angkor Wat, Cambodia",
      imageUrl: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600&auto=format&fit=crop&q=80",
      description: "A massive temple complex in Cambodia featuring magnificent Khmer architecture and intricate stone carvings."
    },
    {
      name: "Taj Mahal, India",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=80",
      description: "An iconic white marble mausoleum symbolizing eternal love and architectural brilliance."
    }
  ],
  beaches: [
    {
      name: "Bora Bora, French Polynesia",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
      description: "Known for its turquoise waters, barrier reefs, and luxury overwater bungalows."
    },
    {
      name: "Copacabana Beach, Brazil",
      imageUrl: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=80",
      description: "A world-renowned stretch of coastline in Rio de Janeiro offering a lively atmosphere and scenic views."
    }
  ]
};

document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('conditionInput').value.toLowerCase().trim();
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = '';

    if (!query) return;

    let results = [];

    if (query.includes('beach')) {
        results = travelData.beaches;
    } else if (query.includes('temple')) {
        results = travelData.temples;
    } else if (query.includes('country') || query.includes('australia') || query.includes('japan')) {
        travelData.countries.forEach(country => {
            results.push(...country.cities);
        });
    }

    if (results.length > 0) {
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'rec-card';
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="rec-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = '<p style="text-align:center; width:100%;">No recommendations found. Try searching for "beach", "temple", or "country".</p>';
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('conditionInput').value = '';
    document.getElementById('recommendationsContainer').innerHTML = '';
});