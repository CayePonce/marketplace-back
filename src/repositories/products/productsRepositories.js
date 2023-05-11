const getPool = require('../../infrastructure/database');
const createProduct = async (
  name,
  description,
  price,
  category,
  keywords,
  idUser,
  status
) => {
  const pool = await getPool();
  const sql = `
  INSERT INTO products(
    name,
    description,
    price,
    category,
    keywords,
    idUser,
    status) 
    VALUES (?,?,?,?,?,?,?)`;

  const [response] = await pool.query(sql, [
    name,
    description,
    price,
    category,
    keywords,
    idUser,
    status,
  ]);
  return response.insertId;
};

const findAllProducts = async () => {
  const pool = await getPool();
  const sql = `
  SELECT * FROM products`;
  const [products] = await pool.query(sql);

  return products;
const updateProduct = async (
  name,
  description,
  price,
  category,
  keywords,
  status,
  id
) => {
  const pool = await getPool();
  if (name) {
    const sql = `
  UPDATE products SET name=? WHERE id=?`;
    await pool.query(sql, [name, id]);
  }
  if (description) {
    const sql = `
UPDATE products SET description=? WHERE id=?`;
    await pool.query(sql, [description, id]);
  }
  if (price) {
    const sql = `
UPDATE products SET price=? WHERE id=?`;
    await pool.query(sql, [price, id]);
  }
  if (category) {
    const sql = `
UPDATE products SET category=? WHERE id=?`;
    await pool.query(sql, [category, id]);
  }
  if (keywords) {
    const sql = `
UPDATE products SET keywords=? WHERE id=?`;
    await pool.query(sql, [keywords, id]);
  }
  if (status) {
    const sql = `
UPDATE products SET status=? WHERE id=?`;
    await pool.query(sql, [status, id]);
  }
};

const insertLocationName = async (locationName, id) => {
  const pool = await getPool();
  const sql = `
  UPDATE products SET locationName=? WHERE id=?`;
  const [response] = await pool.query(sql, [locationName, id]);
  return response;
};

const insertLocation = async (locationLat, locationLong, id) => {
  const pool = await getPool();
  const sql = `
  UPDATE products SET locationLat=? , locationLong=? WHERE id=?`;
  const [response] = await pool.query(sql, [locationLat, locationLong, id]);
  return response;
};

const findProductById = async (id) => {
  const pool = await getPool();
  const sql = `
    SELECT * FROM products
    WHERE id = ? `;
  const [products] = await pool.query(sql, id);
  return products[0];
};
const reactivateProductById = async (id, active) => {
  const pool = await getPool();
  const sql = `
  UPDATE products SET isActive = ? WHERE id= ?`;
  await pool.query(sql, [active, id]);
  console.log(active);
};

module.exports = {
  findProductById,
  createProduct,
  insertLocationName,
  insertLocation,
  findAllProducts,
  updateProduct,
  reactivateProductById,
};
