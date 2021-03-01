const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
        address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
        },
        order: {
            pizza: {
                margherita: {
                amount: 1,
                price: 25,
                },
                pepperoni: {
                amount: 1,
                price: 20,
                }
            },
            drinks: {
                coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
                }
            },
            delivery: {
                deliveryPerson: 'Ana Silveira',
                price: 5,
            }
        },
        payment: {
        total: 60,
        },
    };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". 
    let phase = `Olá ${order.order}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.street}, Nº: ${order.number}, AP: ${order.apartment}". `
    return phase
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);
  console.log(customerInfo())