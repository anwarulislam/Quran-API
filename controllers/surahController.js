const Surah = require('./../models/Surah')

module.exports.getAllSurah = async (req, res) => {
    /*     new Surah({
            sura: 'dhualsdjflra'
        }).save().then((doc) => {
    
        }) */

    res.json({
        message: req.params
    })
}

module.exports.getSurah = async (req, res) => {
    const options = {
        page: req.query.p || 1,
        limit: 10,
        customLabels: 'hlaksdjf'
    };
    let surah = await Surah.paginate({ sura: req.params.surah_no }, options, 5, (error, pageCount, paginatedResults) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Pages:', pageCount);
            console.log(paginatedResults);
        }
    })

    if (surah.prevPage) {
        surah.prevLink = req.protocol + '://' + req.get('host') + req.path + `?p=${surah.prevPage}`
    }
    if (surah.nextPage) {
        surah.nextLink = req.protocol + '://' + req.get('host') + req.path + `?p=${surah.nextPage}`
    }

    res.json(surah)
}