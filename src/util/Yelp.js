const apiKey = 'lt0d2E9MdmvxuD1jzsAKi2NZNRRCI0d7PLuOZFYuwtw1nEWmIhf56blvj0bwdALKjEoLUWU7HuRyUKAqNCXC4mjPMPrh4OZM_bztQoRn1WcB3NYxF8xKORVc-pDMXHYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses)
            {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount,
                    };
                }));
            }
        })
    }
};

export default Yelp;