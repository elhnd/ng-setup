export abstract class ProductMock {

    public static products = [
        { id: 1, username: 'user1', password: 'pass1' },
        { id: 2, username: 'user2', password: 'pass2' },
        { id: 3, username: 'user3', password: 'pass3' },
        { id: 4, username: 'user4', password: 'pass4' },
        { id: 5, username: 'user5', password: 'pass5' },
        { id: 6, username: 'user6', password: 'pass6' },
        { id: 7, username: 'user7', password: 'pass7' },
        { id: 8, username: 'user8', password: 'pass8' },
        { id: 9, username: 'user9', password: 'pass9' },
        { id: 10, username: 'user10', password: 'pass10' }
    ];

    public abstract products: any;
  //static users: any;
}