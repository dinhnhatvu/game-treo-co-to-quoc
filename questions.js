// ============================================================
// FILE: questions.js
// Chứa toàn bộ câu hỏi cho trò chơi "Treo cờ Tổ quốc"
// Giáo viên có thể dễ dàng thêm, bớt, sửa câu hỏi ở đây
// ============================================================

const allQuestions = [
    {
        id: 1,
        question: 'Hòa bình là tình trạng như thế nào?',
        options: [
            'A. Không có chiến tranh hay xung đột vũ trang',
            'B. Các quốc gia chạy đua vũ trang',
            'C. Các nước lớn áp đặt nước nhỏ',
            'D. Chỉ có một quốc gia nắm quyền lực tuyệt đối'
        ],
        correct: 0
    },
    {
        id: 2,
        question: 'Đâu là một biểu hiện của hòa bình trong đời sống xã hội?',
        options: [
            'A. Người dân sống trong lo sợ, bất an',
            'B. Trẻ em không được đến trường',
            'C. Các quốc gia tôn trọng, hợp tác cùng phát triển',
            'D. Xung đột biên giới xảy ra thường xuyên'
        ],
        correct: 2
    },
    {
        id: 3,
        question: 'Khi có mâu thuẫn với bạn, em nên làm gì để giữ gìn hòa bình?',
        options: [
            'A. Lớn tiếng tranh cãi đến cùng để bảo vệ ý kiến',
            'B. Im lặng, không nói chuyện với bạn nữa',
            'C. Bình tĩnh lắng nghe và cùng tìm cách giải quyết',
            'D. Nhờ người khác giải quyết giúp'
        ],
        correct: 2
    },
    {
        id: 4,
        question: 'Hành vi nào sau đây thể hiện tinh thần yêu chuộng hòa bình?',
        options: [
            'A. Phân biệt đối xử với bạn khác giới',
            'B. Cổ vũ bạo lực trên mạng xã hội',
            'C. Tham gia hoạt động "Nói không với bạo lực học đường"',
            'D. Chia rẽ, gây mất đoàn kết trong lớp'
        ],
        correct: 2
    },
    {
        id: 5,
        question: 'Ngày 2/9/1945 đánh dấu sự kiện lịch sử nào của dân tộc Việt Nam?',
        options: [
            'A. Ngày Giải phóng miền Nam thống nhất đất nước',
            'B. Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa',
            'C. Ngày thành lập Đảng Cộng sản Việt Nam',
            'D. Ngày Quốc tế Lao động'
        ],
        correct: 1
    },
    {
        id: 6,
        question: 'Lá cờ Tổ quốc Việt Nam có ý nghĩa như thế nào đối với hòa bình của dân tộc?',
        options: [
            'A. Là biểu tượng của sự giàu có, thịnh vượng',
            'B. Là biểu tượng của độc lập, tự do, hòa bình mà dân tộc đã đấu tranh và bảo vệ',
            'C. Chỉ là một lá cờ bình thường như bao lá cờ khác',
            'D. Là biểu tượng của sức mạnh quân sự'
        ],
        correct: 1
    },
    {
        id: 7,
        question: 'LXu thế chung của thế giới hiện nay là gì?',
        options: [
            'A. chạy đua vũ trang',
            'B. đối đầu thay đối thoại',
            'C. chiến tranh bằng vũ khí hạt nhân',
            'D. hoà bình, ổn định và hợp tác quốc tế'
        ],
        correct: 3
    }
];

// ============================================================
// HƯỚNG DẪN THÊM CÂU HỎI MỚI:
// Sao chép khối bên dưới và điền nội dung:
//
// {
//     id: 7,                           // Số thứ tự (tăng dần, không trùng)
//     question: 'Nội dung câu hỏi?',   // Câu hỏi
//     options: [                        // 4 đáp án A, B, C, D
//         'A. Đáp án A',
//         'B. Đáp án B',
//         'C. Đáp án C',
//         'D. Đáp án D'
//     ],
//     correct: 0                        // Vị trí đáp án đúng (0=A, 1=B, 2=C, 3=D)
// }
// ============================================================
