const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Adjust the path based on your project structure

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
    it('should retrieve all notes', async () => {
      const res = await chai.request(app).get('/api/notes');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  
    it('should create a new note', async () => {
      const noteData = {
        title: 'Test Note',
        content: 'This is a test note.',
      };
  
      const res = await chai.request(app).post('/api/notes').send(noteData);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.myNote).to.be.an('array');
      expect(res.body.myNote[0].title).to.equal(noteData.title);
      expect(res.body.myNote[0].content).to.equal(noteData.content);
    });
  
  describe('API Tests', () => {
  
    it('should retrieve a specific note by ID', async () => {
     
      const noteId = '6593b2f3ca588f1046dd3d2e';
  
      const res = await chai.request(app).get(`/api/notes/${noteId}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.msg).to.equal('get a specific note by ID testing');
    });
    it('should update a note', async () => {
        const noteId = '6593b2f3ca588f1046dd3d2e';
        const updatedNoteData = {
          title: 'Updated Test Note',
          content: 'This is the updated test note content.',
        };
    
        const res = await chai.request(app).put(`/api/notes/${noteId}`).send(updatedNoteData);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.msg).to.equal('update a note testing');
      });
      it('should delete a note', async () => {
      
        const noteId = '6593b2f3ca588f1046dd3d2d';
    
        const res = await chai.request(app).delete(`/api/notes/${noteId}`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.msg).to.equal('delete a note testing');
      });
});
});
