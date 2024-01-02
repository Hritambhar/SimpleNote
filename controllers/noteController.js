const Note = require('../models/noteModel');
const noteController = {
  createNote: async (req, res) => {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const newNote = new Note({
        title,
        content,
      });

      const savedNote = await newNote.save();

      res.status(201).json({ note: savedNote });
    } catch (error) {
      console.error('Error creating note:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllNotes: async (req, res) => {
    try {
      const allNotes = await Note.find({});
      res.status(200).json({ notes: allNotes });
    } catch (error) {
      console.error('Error retrieving notes:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getNoteById: async (req, res) => {
    try {
      const { noteId } = req.params;
      const foundNote = await Note.findById(noteId);

      if (!foundNote) {
        return res.status(404).json({ error: 'Note not found' });
      }

      res.status(200).json({ note: foundNote });
    } catch (error) {
      console.error('Error retrieving note by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateNote: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        { title, content },
        { new: true }
      );

      if (!updatedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }

      res.status(200).json({ note: updatedNote });
    } catch (error) {
      console.error('Error updating note:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteNote: async (req, res) => {
    try {
      const { noteId } = req.params;

      const deletedNote = await Note.findByIdAndDelete(noteId);

      if (!deletedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }

      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.error('Error deleting note:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = noteController;