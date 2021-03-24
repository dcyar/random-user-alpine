window.app = () => {
  return {
    isLoading: false,
    user: '',
    getRandomUser() {
      this.isLoading = true;
      this.user = '';

      fetch('https://randomuser.me/api')
        .then((res) => {
          return res.json();
        })
        .then(({ results }) => {
          this.user = results[0];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  };
};
