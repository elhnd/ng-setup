export abstract class UserMock {

    public static users = [
        { id: 1, email: 'test@hotmail.fr', password: 'test' },
        { id: 2, email: 'user2', password: 'pass2' },
        { id: 3, email: 'user3', password: 'pass3' },
        { id: 4, email: 'user4', password: 'pass4' },
        { id: 5, email: 'user5', password: 'pass5' },
        { id: 6, email: 'user6', password: 'pass6' },
        { id: 7, email: 'user7', password: 'pass7' },
        { id: 8, email: 'user8', password: 'pass8' },
        { id: 9, email: 'user9', password: 'pass9' },
        { id: 10, email: 'user10', password: 'pass10' }
    ];

    public abstract users: any;
  //static users: any;
}