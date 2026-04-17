

const home = (req, res) => {
  try {
    const products = [{
      id: 1,
      title: "Teclado",
      description: "Modelo ASD123",
      price: 115
    }]

    res.render('home', {
      pageTitle: 'Inicio',
      products
    })
  } catch (error) {
    console.log(error)
  }
}

export { home }