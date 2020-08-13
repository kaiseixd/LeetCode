exec(findMin, [2, 1]);

function exec(func = () => {}, ...params) {
  let res = func(...params);
  console.log(res);
}

function execTree() {
  let func = lowestCommonAncestor;
  let input = [3,5,1,6,2,0,8,null,null,7,4];

  let tree = att(input);
  let res = func(tree);
  let arrayRes = tta(res);

  console.log(res);
  console.log(arrayRes);
}

function execLink() {
  let func;
  let input = [1,2,3,4,5,6];

  let linkList = atl(input);
  let res = func(linkList);
  let arrayLinkList = lta(res);

  console.log(res);
  console.log(arrayLinkList);
}