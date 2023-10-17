const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server'); // Update with your server file path
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Routes', () => {
    it('should register a user successfully', (done) => {
        chai.request(server)
            .post('api/register')
            .send({ name: 'Test', email: 'test@example.com', password: 'password123' })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('name');
                done();
            });
    });

    it('should not register a user with an existing email', (done) => {
        chai.request(server)
            .post('/register')
            .send({ name: 'Test', email: 'test@example.com', password: 'password123' })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body.error).to.equal('User with this email already exists');
                done();
            });
    });

    // ... Add more tests for login and user profile
});
