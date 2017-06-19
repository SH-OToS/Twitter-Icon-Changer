window.setInterval(function () {
    $(function () {
        // $(".edge-design .avatar").css("border-radius", "5px");
        var src = ['.edge-design .avatar',
            ' .DMAvater-image',
            ' .edge-design .DashboardProfileCard-avatarImage',
            ' .edge-design .DashboardProfileCard-avatarLink',
            ' .edge-design .Gallery.is-tweetless .Gallery-content',
            ' .edge-design .Gallery.is-tweetless .Gallery-media',
            ' .edge-design .MomentCapsuleCover .MomentUserByline-avatar',
            ' .edge-design .MomentCapsuleItemTweet--withText .MomentUserByline-avatar',
            ' .edge-design .MomentCapsuleSummary .MomentUserByline-avatar',
            ' .edge-design .MomentMakerRecommendedTweetsSearch--users .MomentMakerRecommendedTweetsSearch-userContainer .avatar',
            ' .edge-design .ProfileAvatar',
            ' .edge-design .ProfileAvatar-image',
            ' .edge-design .ProfileAvatar-placeholderImage',
            ' .edge-design .ProfileAvatarEditing',
            ' .edge-design .ProfileAvatarEditing-button',
            ' .edge-design .ProfileAvatarEditing-overlay',
            ' .edge-design .ProfileCard-avatarImage',
            ' .edge-design .ProfileCard-avatarLink',
            ' .edge-design .ProfileCardMini-avatarImage',
            ' .edge-design .ProfileListItem-avatar',
            ' .edge-design .ProfileUserList .Avatar',
            ' .edge-design .RelatedUsers-users>.account-summary .avatar'];

        for (var i = 0; i < src.length; i++) {
            if ($(src[i]).length) {
                $(src[i]).css("border-radius", "5px");
                // console.log("yattaze");
            }
        }
    });
}, 100);

