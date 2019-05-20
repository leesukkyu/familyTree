var express = require('express');
var router = express.Router();
var Pedigree = require('../../models/pedigree');
var People = require('../../models/people');

var _resErrorInterceptor = function (err) {
  if (err) {
    return {
      isErr: true,
      err: err
    }
  } else {
    return {
      isErr: false,
    };
  }
}

/* 족보 리스트 불러오기 */
router.all('/load_pedigree_list', function (req, res, next) {
  Pedigree.find({}, function (err, list) {
    var rs = _resErrorInterceptor(err);
    if (rs.isErr) {
      res.json(rs);
    } else {
      rs.pedigreeList = list
      res.json(rs);
    }
  });
});

/* 족보 생성 */
router.all('/save_pedigree', function (req, res, next) {
  var model = {
    surname: req.body.surname,
    surname_chinese: req.body.surname_chinese,
    root_father: req.body.root_father,
    root_father_chinese: req.body.root_father_chinese,
    family_origin: req.body.family_origin,
    family_origin_chinese: req.body.family_origin_chinese,
    middle_tier_name: req.body.middle_tier_name,
    middle_tier_name_Chinese: req.body.middle_tier_name_Chinese,
    middle_tier_generation: req.body.middle_tier_generation,
    middle_tier_faction: req.body.middle_tier_faction
  }
  Pedigree.create(model, function (err, user) {
    var rs = _resErrorInterceptor(err);
    if (rs.isErr) {
      res.json(rs);
    } else {
      rs.id = user.id
      res.json(rs);
    }
  });
});

/* 족보 삭제 */
router.all('/delete_pedigree', function (req, res, next) {
  var model = {
    _id: req.body._id
  };
  Pedigree.findOneAndDelete(model, function (err, user) {
    var rs = _resErrorInterceptor(err);
    if (rs.isErr) {
      res.json(rs);
    } else {
      res.json(rs);
    }
  });
});

// 사람 한명 생성
router.all('/create_person', function (req, res, next) {
  var rq = req.body.rq;
  var model = {
    generation: rq.generation,
    name: rq.name,
    name_chinese: rq.name_chinese,
    is_male: rq.is_male,
    age: rq.age,
    birth_timestamp: rq.birth_timestamp,
    death_timestamp: rq.death_timestamp,
    job: rq.job,
    tag_list: rq.tag_list,
  }
  People.create(model, function (err, user) {
    var rs = _resErrorInterceptor(err);
    if (rs.isErr) {
      res.json(rs);
    } else {
      rs.id = user.id
      res.json(rs);
    }
  });
});

// 자녀를 생성
router.all('/create_person_child', function (req, res, next) {
  var rq, parentId, model;
  rq = req.body.rq;
  parentId = rq.relationPersonItem._id;
  model = {
    generation: rq.generation,
    name: rq.name,
    name_chinese: rq.name_chinese,
    is_male: rq.is_male,
    age: rq.age,
    birth_timestamp: rq.birth_timestamp,
    death_timestamp: rq.death_timestamp,
    job: rq.job,
    tag_list: rq.tag_list,
    id_parent : parentId,
  }
  People.create(model, function (err, user) {
    var rs = _resErrorInterceptor(err);
    service.addChildList(parentId, user.id, function(){
      if (rs.isErr) {
        res.json(rs);
      } else {
        rs.id = user.id
        res.json(rs);
      }
    });
  });
});

// 1~10세대 사이의 사람들 정보를 가져옴
router.all('/loadPersons', function (req, res, next) {
  var startGeneration, endGeneration;
  startGeneration = req.body.rq.startGeneration;
  endGeneration = startGeneration + 9;
  // 여기서 조회를 해야 함
  People.find({ generation: { $gte: 0, $lte: endGeneration } }, function (err, list) {
    console.log(list);
    var rs = _resErrorInterceptor(err);
    if (rs.isErr) {
      res.json(rs);
    } else if(list) {
      rs.personList = list;
      res.json(rs);
    }
  });
});


var service = {
  // 부모에게 자식 데이터 추가
  addChildList : function(parentId, childId, callback){
    People.findById(parentId, function (err, doc) {
      if (err) {
        console.log(err);
      }
      !doc.id_child_list ? doc.id_child_list = [] : '';
      doc.id_child_list.push(childId);
      doc.save(callback);
    });
  }
}

module.exports = router;
