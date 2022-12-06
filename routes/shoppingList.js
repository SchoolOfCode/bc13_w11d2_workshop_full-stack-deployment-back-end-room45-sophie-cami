import express from "express";
import {
  getShoppingList,
  postListItem,
  patchListItem,
  deleteListItems,
} from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { completed } = req.body;
  const result = await patchListItem(id, completed);
  res.status(200).json({ success: true, payload: result });
});

router.delete("/", async (req, res) => {
  const result = await deleteListItems();
  res.status(200).json({ success: true, payload: result });
});

export default router;
