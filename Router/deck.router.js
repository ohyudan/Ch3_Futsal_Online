import express from 'express';

const router = express.Router();

/** 팀원 조회하기
 * 오유단
 * 원본 URL getMyDeck/:accout_id
 */

router.get(`/MyDeck/get/:accout_id`, (req, res, next) => {
  try {
  } catch (err) {}
});

/** 팀원 방출하기
 * 오유단
 * 원본 URL outMyDeck/:accout_id
 */
router.post(`/MyDeck/out/:accout_id`, (req, res, next) => {
  try {
  } catch (err) {}
});
export default router;
