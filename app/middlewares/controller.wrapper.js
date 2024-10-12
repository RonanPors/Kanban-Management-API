// Fonction d'encapsulation des méthodes des contrôleurs pour la gestion des erreurs.
export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    next(error);
  }
};
