class HomeService {
    constructor($http) {
        this.$http = $http;
    }

    getPokemons() {
        return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json');
    }
};

HomeService.$inject = ['$http'];

module.exports = HomeService;