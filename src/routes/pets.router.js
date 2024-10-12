import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';
import generatePets from '../utils/mockingPets.js';

const router = Router();

router.get('/',petsController.getAllPets);
router.post('/',petsController.createPet);
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid',petsController.updatePet);
router.delete('/:pid',petsController.deletePet);
router.get("/mockingpets", (req, res) => {
    const pets = generatePets(100)
    res.json(pets)
})

export default router;