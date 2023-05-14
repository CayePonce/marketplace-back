const {
  findBuyRequestData,
  createDeal,
  findDealById,
  findDealDataByVendorId,
  updateDealStatus,
  addDealMessage,
  findDealDataByBuyerId,
  findAllDealsByUserId,
  findLatestMessageContentByDealId,
  findAllDealsChatHistoryByUserId,
} = require('./deals/dealsRepositories');
const {
  createProduct,
  findProductById,
  findAllProducts,
  insertLocation,
  insertLocationName,
  updateProduct,
  reactivateProductById,
  insertProductImageName,
  findProductForLocationSearch,
  findProductByCategory,
  findProductByName,
  sortProductByPriceAsc,
  sortProductByPriceDesc,
  findImagesByIdProduct,
  findProductByUserId,
  findProductForResponsesByUserId,
  findProductByCity,
} = require('./products/productsRepositories');
const {
  findReviewsByDealId,
  addReview,
  findExistingUserReviewsByDealId,
  findAvgReviewsByUserId,
  findAvgReviewsAsBuyerOrVendorByUserId,
} = require('./reviews/reviewsRepositories');
const {
  findUserById,
  findUserByEmail,
  findUserByUsername,
  createUser,
  findUserByActivationCode,
  addUserVerificationDate,
  updateUser,
} = require('./users/usersRepositories');

module.exports = {
  findProductByCity,
  findProductForResponsesByUserId,
  findImagesByIdProduct,
  findAvgReviewsAsBuyerOrVendorByUserId,
  findAvgReviewsByUserId,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  createUser,
  findUserByActivationCode,
  addUserVerificationDate,
  findBuyRequestData,
  createDeal,
  createProduct,
  updateProduct,
  findProductByUserId,
  insertLocation,
  insertLocationName,
  findProductById,
  findAllProducts,
  findDealById,
  findDealDataByVendorId,
  updateDealStatus,
  reactivateProductById,
  addDealMessage,
  findDealDataByBuyerId,
  insertProductImageName,
  updateUser,
  findAllDealsByUserId,
  findLatestMessageContentByDealId,
  findReviewsByDealId,
  addReview,
  findProductForLocationSearch,
  findProductByName,
  findProductByCategory,
  sortProductByPriceAsc,
  sortProductByPriceDesc,
  findExistingUserReviewsByDealId,
  findAllDealsChatHistoryByUserId,
};
