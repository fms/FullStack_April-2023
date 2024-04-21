interface User {
          "id": number,
          "firstName": string,
          "lastName": string,
          "maidenName": string,
          "age": number,
          "gender": string,
          "email": string,
          "phone": string,
          "username": string,
          "password": string,
          "birthDate": string,
          "image": string,
          "bloodGroup": string,
          "height": number,
          "weight": number,
          "eyeColor": string,
          "hair": {
            "color": string,
            "type": string
          },
          "domain": string,
          "ip": string,
          "address": {
            "address": string,
            "city": string,
            "coordinates": {
              "lat": number,
              "lng": number
            },
            "postalCode": string,
            "state": string
          },
          "macAddress": string,
          "university": string,
          "bank": {
            "cardExpire": string,
            "cardNumber": string,
            "cardType": string,
            "currency": string,
            "iban": string
          },
          "company": {
            "address": {
              "address": string,
              "city": string,
              "coordinates": {
                "lat": number,
                "lng": number
              },
              "postalCode": string,
              "state": string
            },
            "department": string,
            "name": string,
            "title": string
          },
          "ein": string,
          "ssn": string,
          "userAgent": string
}