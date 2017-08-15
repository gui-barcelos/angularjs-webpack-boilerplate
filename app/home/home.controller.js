class HomeController {
    constructor(HomeService, URL_API) {
        console.log(`URL_API: ${URL_API}`);

        this.HomeService = HomeService;
    }

    getPokemons() {
        this.HomeService.getPokemons().then((response) => {
            this.pokemons = response.data;
        });
    }

    $onInit() {
        this.getPokemons();
    }
}

HomeController.$inject = ['HomeService', 'URL_API'];

module.exports = HomeController;