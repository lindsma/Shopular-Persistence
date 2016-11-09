angular.module('inventoryApp').service('ItemsService', function(localStorageService) {

    function getItems() {
        return localStorageService.get('storedItems') || [];
    }

    function setItems(allItems) {
        localStorageService.set('storedItems', allItems);
    }

    function setUser(userInfo) {
      localStorageService.set('user', userInfo);
    }

    function getUser() {
        return localStorageService.get('user') || [];
    }

    return {
        get: getItems,
        set: setItems,
        setUser: setUser,
        getUser: getUser
    };

});
